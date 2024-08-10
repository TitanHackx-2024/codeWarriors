package server.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity(name = "t_user")
@Getter
@Setter
//User ID, name, email, password hash
public class User extends BaseModel{
    private String username;
    private String email;
    private String password;
    private Boolean isActive;
    private String phoneNumber;
    @Enumerated(EnumType.ORDINAL)
    private Role roles;
}
