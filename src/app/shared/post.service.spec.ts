import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({

    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      PostService
    ],
  });

  postService = TestBed.get(PostService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, (inject([HttpTestingController, PostService],
    (httpClient: HttpTestingController, postService: PostService) => {

      // 
      const postItem = [
        {
          "userId": 1,
          "name": "Sanju",
          "email": "sanju123@mail.com"
        },
        {
          "userId": 2,
          "name": "Priya",
          "email": "priya123@mail.com"
        },
        {
          "userId": 3,
          "name": "Manikyala",
          "email": "manikyala@mail.com"
        }
      ];


      postService.getPosts()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
      expect(req.request.method).toBe("GET");

      req.flush(postItem);
      httpMock.verify();

    })));


});

