const API_URL = process.env.API_URL || 'https://admin.wemark.pro/api/tasks-xschool/';

export async function getPageData() {
  const res = await fetch(API_URL, { next: { revalidate: 60 } });
  return res.json();
}
