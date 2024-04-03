package br.com.ero.paginationangular.services;

import br.com.ero.paginationangular.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;


public interface UserService {
    Page<User> getUsers(String name, int page, int size);

}
