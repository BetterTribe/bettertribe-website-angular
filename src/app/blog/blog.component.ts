import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog/blog.model';
import { FetchBlogsService } from '../services/fetch-blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  blogHtml = ``
  blogs: Blog[];

  constructor(private fetchBlogService: FetchBlogsService) {
   }

  ngOnInit() {
    this.fetchBlogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs.map(blog => {
        return {
          id: blog.payload.doc.id,
          ...blog.payload.doc.data()
        } as Blog;
      })
    })
  }

}
