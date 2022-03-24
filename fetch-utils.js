const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25pb3pteXV1aWpzY2ZkcXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5OTMzNTYsImV4cCI6MTk2MzU2OTM1Nn0.o5Vjx7n791rkZxuhmxHUoti3dkFusShLHfaXhGvGNHg';
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

export async function getAllColours() {
    const response = await client
        .from('Colours')
        .select();
    return response.data;
}