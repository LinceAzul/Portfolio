# Quick Setup Guide

## Step 1: Fill in Your Data

Update all data files in the `data/` directory with your information:

1. **data/about.ts** - Your personal information
2. **data/experience.ts** - Your work experience
3. **data/projects.ts** - Your projects
4. **data/education.ts** - Your education
5. **data/certifications.ts** - Your certifications
6. **data/languages.ts** - Languages you speak
7. **data/contact.ts** - Contact information

## Step 2: Add Images

1. **Profile Image**: 
   - Add your profile photo as `public/profile.jpg`
   - Recommended size: 400x400px or larger (square aspect ratio)

2. **Project Images**:
   - Add project images to `public/projects/` directory
   - Name them descriptively (e.g., `project1.jpg`, `project2.png`)
   - Recommended size: 1200x600px or larger
   - Update the `image` field in `data/projects.ts` to match your file names

3. **Favicon**:
   - Replace `app/favicon.ico` with your own favicon

## Step 3: Update SEO Metadata

Edit `app/layout.tsx` and update the metadata object with your information:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your portfolio description",
  // ... update other fields
};
```

## Step 4: Test Locally

1. Run the development server:
```bash
npm run dev
```

2. Open http://localhost:3000 in your browser

3. Check all sections and verify:
   - All your data displays correctly
   - Images load properly
   - Links work (social media, projects, etc.)
   - Navigation works smoothly
   - Responsive design works on mobile

## Step 5: Deploy

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 2: Other Platforms

Follow the deployment instructions for your preferred platform (Netlify, AWS Amplify, etc.)

## Tips

- **Date Format**: Use YYYY-MM format for dates (e.g., "2024-01")
- **Current Positions**: Set `endDate: null` and `current: true` for current positions
- **Project Images**: Use high-quality images for better visual impact
- **Colors**: Customize colors in component files if you want a different color scheme
- **Animations**: Adjust animation delays and durations in component files if needed

## Need Help?

- Check the main README.md for detailed documentation
- Review the example data structures in each data file
- All components are well-commented for easy customization

