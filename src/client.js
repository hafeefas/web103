import { createClient } from '@supabase/supabase-js';

const URL = 'https://gxribqwwiamgbgdxtvxa.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cmlicXd3aWFtZ2JnZHh0dnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNDc5MjEsImV4cCI6MjAwNzYyMzkyMX0.7N3i0SAAPLvmCIGa9tfZGexuo45gf2fEEkyuaUaf5HU'

const supabase = createClient(URL, API_KEY);

export { supabase };