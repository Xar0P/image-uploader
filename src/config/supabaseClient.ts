import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://arwjyfoouyilkwuysunt.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyd2p5Zm9vdXlpbGt3dXlzdW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2NTU5MDQsImV4cCI6MTk2OTIzMTkwNH0.UagTybTgAyF_3MABLy_KWDRjLZf4Z3eNS4Z4-0p8nqQ';

export default createClient(supabaseUrl, supabaseAnonKey);
