# Image Optimization Documentation

## OptimizedImage Component

The `OptimizedImage` component provides optimized image loading with automatic format detection, progressive loading, and error recovery.

### Basic Usage

```jsx
import { OptimizedImage } from '../components/OptimizedImage';

function MyComponent() {
  return (
    <OptimizedImage
      folder="hero"
      imageName="banner"
      alt="Hero Banner"
      width={1200}
      height={600}
      priority={false}
      className="my-custom-class"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| folder | string | required | The Cloudinary folder containing the image |
| imageName | string | required | The name of the image in the folder |
| alt | string | required | Alt text for accessibility |
| width | number | optional | Desired width of the image |
| height | number | optional | Desired height of the image |
| priority | boolean | false | Whether to load the image eagerly |
| className | string | optional | Additional CSS classes |

### Features

1. **Automatic Format Detection**
   - Automatically detects browser support for AVIF, WebP, and JPEG
   - Uses the most optimal format supported by the browser
   - Falls back to auto format if detection fails

```jsx
// The component will automatically use the best format
<OptimizedImage
  folder="products"
  imageName="item-1"
  alt="Product"
  width={800}
/>
```

2. **Progressive Loading**
   - Shows a low-quality blurred thumbnail while loading
   - Smoothly transitions to the full-quality image
   - Handles loading states gracefully

```jsx
// The image will load progressively with a blur effect
<OptimizedImage
  folder="gallery"
  imageName="photo"
  alt="Gallery Photo"
  width={1024}
  height={768}
/>
```

3. **Error Recovery**
   - Automatically retries failed loads with lower quality
   - Makes up to 2 retry attempts
   - Reduces quality by 15% on each retry (minimum 40%)
   - Shows error state if all retries fail

```jsx
// The component will handle errors and retries automatically
<OptimizedImage
  folder="blog"
  imageName="cover"
  alt="Blog Cover"
  width={900}
/>
```

## Preloading Critical Images

Use the `preloadCriticalImages` function to eagerly load important images:

```jsx
import { preloadCriticalImages } from '../utils/imageCache';

// In your page component
useEffect(() => {
  preloadCriticalImages([
    { folder: 'hero', imageName: 'banner' },
    { folder: 'about', imageName: 'team' }
  ]);
}, []);
```

### Best Practices

1. **Priority Loading**
   - Use `priority={true}` for above-the-fold images
   ```jsx
   <OptimizedImage
     folder="hero"
     imageName="banner"
     alt="Hero"
     priority={true}
   />
   ```

2. **Responsive Images**
   - Provide both width and height when possible
   - Let the component handle responsive sizing
   ```jsx
   <OptimizedImage
     folder="gallery"
     imageName="photo"
     alt="Photo"
     width={1200}
     height={800}
   />
   ```

3. **Error Handling**
   - The component handles errors automatically
   - Shows a fallback UI when images fail to load
   ```jsx
   <div className="gallery-wrapper">
     <OptimizedImage
       folder="gallery"
       imageName="photo"
       alt="Gallery Photo"
     />
   </div>
   ```

### Cache Management

The component automatically manages a cache of transformed URLs:
- Caches URLs in localStorage
- Expires cache entries after 7 days
- Automatically cleans up expired entries
- Persists across page reloads

### Performance Impact

These optimizations help reduce Cloudinary credit usage by:
1. Caching transformed URLs
2. Using optimal formats per browser
3. Progressive quality reduction on errors
4. Preloading critical images
5. Automatic format optimization

### Example Page Implementation

```jsx
import React, { useEffect } from 'react';
import { OptimizedImage } from '../components/OptimizedImage';
import { preloadCriticalImages } from '../utils/imageCache';

export function HomePage() {
  useEffect(() => {
    // Preload critical images
    preloadCriticalImages([
      { folder: 'hero', imageName: 'banner' },
      { folder: 'featured', imageName: 'product' }
    ]);
  }, []);

  return (
    <div>
      {/* Hero section with priority loading */}
      <section className="hero">
        <OptimizedImage
          folder="hero"
          imageName="banner"
          alt="Welcome Banner"
          width={1920}
          height={1080}
          priority={true}
        />
      </section>

      {/* Gallery section with regular loading */}
      <section className="gallery">
        {galleryImages.map((image) => (
          <OptimizedImage
            key={image.id}
            folder="gallery"
            imageName={image.name}
            alt={image.alt}
            width={600}
            height={400}
          />
        ))}
      </section>
    </div>
  );
}
``` 