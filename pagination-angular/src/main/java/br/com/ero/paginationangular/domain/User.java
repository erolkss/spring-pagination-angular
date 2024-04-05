package br.com.ero.paginationangular.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String status;
    private String address;
    private String phone;
    private String imageUrl;
}
