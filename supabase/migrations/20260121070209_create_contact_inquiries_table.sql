/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Contact person's name
      - `company` (text) - Company name
      - `email` (text) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `rice_variety` (text, optional) - Rice variety they're interested in
      - `message` (text) - Inquiry message
      - `created_at` (timestamptz) - Timestamp of inquiry submission
      - `status` (text) - Status of inquiry (new, contacted, converted)

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for inserting inquiries (public access for form submissions)
    - Add policy for reading inquiries (authenticated admin access only)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  rice_variety text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);