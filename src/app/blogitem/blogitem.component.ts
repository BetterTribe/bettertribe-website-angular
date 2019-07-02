import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchBlogService } from '../services/fetch-blog.service';
import { Blog } from '../models/blog/blog.model';

@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {

  blog: Blog
  id: string

  constructor(private activatedRoute: ActivatedRoute, private fetchBlogService: FetchBlogService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.fetchBlogService.fetchBlogById(this.id).get().subscribe(blog => {
      this.blog = blog.data() as Blog
    })
  }

}
