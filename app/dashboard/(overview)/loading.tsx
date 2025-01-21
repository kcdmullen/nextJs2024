// import DashboardSkeleton from '@/app/ui/skeletons';

// export default function Loading() {
//   return <DashboardSkeleton />;
// }

/* loading.tsx is a special Next.js file built on top of Suspense, it allows you to create 
fallback UI to show as a replacement while page content loads. */

/*
Route groups allow you to organize files into logical groups without affecting the URL path structure. 
When you create a new folder using parentheses (), the name won't be included in the URL path. 
So /dashboard/(overview)/page.tsx becomes /dashboard. We use it here to make it so loading.tsx
applies to this page only */
