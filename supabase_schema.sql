-- ============================================
-- Full Deck Agency — Website Database Schema
-- ============================================
-- Run this in your EXISTING Supabase project SQL Editor
-- (same project as fulldeck-social)
-- These tables won't conflict with your social app tables
-- ============================================

-- ============================================
-- 1. BLOG POSTS
-- ============================================
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  tags TEXT[] DEFAULT '{}',
  author TEXT DEFAULT 'Gabe Andersen',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  meta_title TEXT,
  meta_description TEXT,
  reading_time INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);

-- ============================================
-- 2. CASE STUDIES
-- ============================================
CREATE TABLE case_studies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  challenge TEXT NOT NULL,
  strategy TEXT NOT NULL,
  results TEXT NOT NULL,
  metrics JSONB DEFAULT '{}',
  testimonial TEXT,
  testimonial_author TEXT,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_case_studies_slug ON case_studies(slug);
CREATE INDEX idx_case_studies_published ON case_studies(published);
CREATE INDEX idx_case_studies_industry ON case_studies(industry);

-- ============================================
-- 3. LEADS (Contact Form Submissions)
-- ============================================
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'contact_form',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);

-- ============================================
-- 4. TESTIMONIALS
-- ============================================
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  company TEXT,
  industry TEXT,
  quote TEXT NOT NULL,
  rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  photo_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 5. ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public read for published content
CREATE POLICY "Public can read published blog posts"
  ON blog_posts FOR SELECT USING (published = true);

CREATE POLICY "Public can read published case studies"
  ON case_studies FOR SELECT USING (published = true);

CREATE POLICY "Public can read featured testimonials"
  ON testimonials FOR SELECT USING (featured = true);

-- Anyone can submit a lead
CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT WITH CHECK (true);

-- Admin full access
CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage case studies"
  ON case_studies FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage leads"
  ON leads FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- 6. AUTO-UPDATE TIMESTAMPS
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at
  BEFORE UPDATE ON case_studies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 7. SEED DATA
-- ============================================
INSERT INTO testimonials (client_name, company, industry, quote, rating, featured) VALUES
  ('Mike Thompson', 'Thompson Decking Co.', 'Deck Builder', 'Full Deck Agency transformed our online presence. We went from getting 2-3 leads a month to over 20. The ROI has been incredible.', 5, true),
  ('Sarah Rodriguez', 'Clean Sweep Power Washing', 'Power Washing', 'Gabe and his team understand the home services industry like nobody else. Our Google rankings skyrocketed within 3 months.', 5, true),
  ('James Wilson', 'Wilson Roofing & Repairs', 'Roofing', 'The PPC campaigns Full Deck set up for us generated $45,000 in new business in the first quarter alone. Best marketing investment we have made.', 5, true);

INSERT INTO blog_posts (title, slug, excerpt, content, category, published, published_at, reading_time) VALUES
  (
    '5 Digital Marketing Strategies Every Deck Builder Needs in 2026',
    '5-digital-marketing-strategies-deck-builders-2026',
    'Discover the top digital marketing strategies that are driving results for deck building companies this year.',
    '## Introduction\n\nThe deck building industry is more competitive than ever. With homeowners increasingly turning to Google to find contractors, having a strong digital marketing strategy is no longer optional — it is essential.\n\n## 1. Local SEO Optimization\n\nYour Google Business Profile is your most powerful free marketing tool. Make sure it is fully optimized with recent photos, accurate info, and regular posts.\n\n## 2. Pay-Per-Click Advertising\n\nGoogle Ads lets you appear at the top of search results immediately. Target high-intent keywords like "deck builder near me."\n\n## 3. Social Media Showcasing\n\nBefore-and-after photos perform incredibly well on Facebook and Instagram.\n\n## 4. Content Marketing\n\nCreate helpful content that answers common homeowner questions about decking.\n\n## 5. Review Management\n\nActively manage and respond to your online reviews.',
    'Digital Marketing',
    true,
    NOW() - INTERVAL '3 days',
    6
  ),
  (
    'How Much Should a Home Service Company Spend on Marketing?',
    'how-much-should-home-service-company-spend-marketing',
    'A practical guide to setting your marketing budget based on your revenue goals.',
    '## The Marketing Budget Question\n\nOne of the most common questions we get: "How much should I be spending on marketing?"\n\n## Industry Benchmarks\n\nMost successful home service companies invest between 5-10% of gross revenue in marketing. Growth-mode companies often spend 12-15%.\n\n## Our Recommendation\n\nStart with what you can sustain consistently. It is better to invest $1,500/month steadily than $5,000 for two months and then stop.',
    'Business Tips',
    true,
    NOW() - INTERVAL '7 days',
    5
  ),
  (
    'Local SEO for Contractors: The Complete 2026 Guide',
    'local-seo-contractors-complete-guide-2026',
    'Everything you need to know about ranking your contracting business in local search results.',
    '## Why Local SEO Matters\n\nWhen someone searches "roofer near me," you want your business at the top.\n\n## Google Business Profile\n\nYour GBP is the foundation. Complete every section, add photos weekly, and respond to every review.\n\n## Building Local Citations\n\nEnsure your NAP is consistent across all directories.\n\n## Getting More Reviews\n\nImplement a systematic review request process after every completed job.',
    'SEO',
    true,
    NOW() - INTERVAL '14 days',
    8
  );
