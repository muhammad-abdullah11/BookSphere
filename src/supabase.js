import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.SUPBASE_BASE_URL
const supabaseKey = import.meta.env.SUPBASE_API_KEY

export const supabase = createClient("https://eeydsmkiazkahqapcnje.supabase.co", "sb_publishable_RFpQKQSX3dvXYTf4yG8AhA_ZDoV2NeY")
