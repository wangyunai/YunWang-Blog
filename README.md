# Yun Wang's Blog

This is a personal blog built with Jekyll and hosted on GitHub Pages.

## Local Development

### Prerequisites

- Ruby
- Bundler

### Setup

1. Clone this repository
```bash
git clone https://github.com/username/blog.git
cd blog
```

2. Install dependencies
```bash
bundle install
```

3. Run the local server
```bash
bundle exec jekyll serve
```

4. Open your browser and visit `http://localhost:4000`

## Creating New Posts

Create a new file in the `_posts` directory with the filename format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0500
categories: [category1, category2]
tags: [tag1, tag2]
---

Your content here...
```

## Customization

- Edit `_config.yml` to change site-wide settings
- Modify layouts in the `_layouts` directory
- Edit styles in `assets/css/main.css`

## Deployment

The blog is automatically built and deployed when changes are pushed to the main branch of the repository.

## License

[MIT](LICENSE) 