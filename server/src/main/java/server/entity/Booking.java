package server.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity(name = "t_booking")
public class Booking extends BaseModel{

    @ManyToOne
    private User user;

    @ManyToOne
    private  Chef chef;

    @Enumerated(EnumType.ORDINAL)
    private BookingStatus bookingStatus;
    private Instant bookedAt;
    // 1 : M
    // M : 1  , cancelled booking will also have foodDish
    @ManyToMany
    private List<FoodDish> foodDishList;
    // 1 : 1
    // M : 1
    @ManyToOne
    private Skills chefSlot;
    private int amount;
    // 1 : M
    // 1 : 1
    @OneToMany(mappedBy = "booking")
    private List<Payment> payments;
}
