import fetch from 'isomorphic-unfetch';
const url = "https://cms.nukta.co.tz";

export async function getHomeData(page=1) {
    const res = await fetch(
      `${url}/wp-json/wp/v2/posts?per_page=22&page=${page}`
    );
    const data = await res.json();

    return data;
}

export async function getSectionNews(category, perPage=12, page=1) {
    const res = await fetch(
      `${url}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&categories=${category}`
    );
    const data = await res.json();

    return data;
}


export async function getPopularPosts() {
    const res = await fetch(
      `${url}/wp-json/wordpress-popular-posts/v1/popular-posts?range=last30days`
    );
    const data = await res.json();

    return data;
}

export async function getArticle(slug) {
  const res = await fetch(
    `${url}/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  const data = await res.json();

  return data[0];
}

export async function getRelatedArticles(id) {
  const res = await fetch(
    `${url}/wp-json/related-posts-by-taxonomy/v1/posts/${id}?posts_per_page=6&fields=ids`
  );
  const data = await res.json();

  return data.posts;
}
