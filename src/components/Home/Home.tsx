/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React, { useState, DragEvent } from 'react';

import {
  Container,
  Title,
  Description,
  DragDrop,
  Icon,
  Text,
  ChooseFile,
} from './Home.styles';
import landscapeImg from '../../assets/svg/landscape.svg';
import supabase from '../../config/supabaseClient';
import { Uploading, UploadSuccess } from '..';

const Home: React.FC = () => {
  const [isOverhead, setIsOverhead] = useState(false);
  const [img, setImg] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [linkImg, setLinkImg] = useState('');

  const uploadFile = async (img: File) => {
    setIsLoading(true);
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`public/${Date.now()}_${img.name}`, img);
    setIsLoading(false);

    if (error) {
      console.log(error);
    }

    if (data) {
      const { Key } = data;
      const { publicURL, error } = supabase.storage
        .from('images')
        .getPublicUrl(Key.substring(7));

      if (publicURL) {
        setLinkImg(publicURL);
      }

      if (error) {
        console.log(error);
      }
    }
  };

  // React.ChangeEvent<HTMLInputElement>
  const handleChangeImage = (e: any) => {
    setImg(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    const fileType = file.type;
    const validExtensions = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/svg+xml',
    ];

    if (validExtensions.includes(fileType)) {
      setImg(file);
      uploadFile(file);
    }
  };

  return (
    <>
      {!isLoading && !img ? (
        <Container>
          <Title>Upload your image</Title>
          <Description>File should be Jpeg, Png...</Description>
          <DragDrop
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOverhead(true);
            }}
            onDragLeave={() => setIsOverhead(false)}
            onDropCapture={handleDrop}
            isOverhead={isOverhead}
          >
            <Icon src={landscapeImg} />
            <Text>Drag & Drop your image here</Text>
          </DragDrop>
          <Text>Or</Text>
          <ChooseFile>
            <input
              type='file'
              id='img'
              name='img'
              accept='image/*'
              onChange={handleChangeImage}
            />
            <span>Choose a file</span>
          </ChooseFile>
        </Container>
      ) : isLoading ? (
        <Uploading />
      ) : (
        <UploadSuccess url={linkImg} />
      )}
    </>
  );
};

export default Home;
