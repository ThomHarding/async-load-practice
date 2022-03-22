const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25pb3pteXV1aWpzY2ZkcXJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzk3MDgzMiwiZXhwIjoxOTYzNTQ2ODMyfQ.aIyMRF9XdkPBHK44Pa_QPNJw6u182zM9tiEG3PKwwj8';

const SUPABASE_URL = 'https://tfsniozmyuuijscfdqre.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCandies() {
    const response = await client
        .from('Candies')
        .select();
    return response.data;
}