package com.petadoption.mypet.Service;

import com.petadoption.mypet.DTO.PetPostDTO;
import com.petadoption.mypet.Model.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    public String createPost(PetPostDTO post) {
        postRepository.save(post);
        return "successful to create post";
    }
}
