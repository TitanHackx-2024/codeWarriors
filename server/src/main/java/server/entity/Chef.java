package server.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity(name="chef")
@Getter
@Setter
public class Chef extends BaseModel{


    private String name;
    private String skills;
    private String availability;
    private String phoneNumber;
    private double rating;


}