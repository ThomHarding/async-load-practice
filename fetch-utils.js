const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25pb3pteXV1aWpzY2ZkcXJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzk3NzU5NywiZXhwIjoxOTYzNTUzNTk3fQ.mbQ2uJg-0qioQKy2QV7q3dm-Pubw1AtnlG4bng4SuLQ';

const SUPABASE_URL = 'https://tfsniozmyuuijscfdqre.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCandies() {
    const response = await client
        .from('Candies')
        .select();
    return response.data;
}

export async function getAllMovies() {
    const response = await client
        .from('Movies')
        .select();
    return response.data;
}

export async function getAllSongs() {
    const response = await client
        .from('Songs')
        .select();
    return response.data;
}