package server.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "t_fooddish")
public class FoodDish extends BaseModel{
}
