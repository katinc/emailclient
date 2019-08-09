package com.example.email.Controller;

import com.example.email.Model.User;
import com.example.email.Service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    @Autowired
    private MailService mailService;


    @RequestMapping("sendmail")
    /*@ResponseBody */public String send(/*@RequestBody*/ User user){

        try{
            user.setEmailReceiver("katinc2016@gmail.com");
            user.setEmailMessage("Good Day" + System.lineSeparator()
                    + "Your booking for 2pm on Saturday for Cornroll has successfully been created." + System.lineSeparator()
                    +  "We will call to confirm your order in a bit." );
            user.setEmailSubject("Test 1");
            mailService.sendMail(user);

            user.setEmailReceiver("kniikalpha@gmail.com");
            user.setEmailSubject("Booking");
            user.setEmailMessage("New Booking" + System.lineSeparator()
                    + "By Gloria" + System.lineSeparator()
                    + "Time: 2pm" + System.lineSeparator()
                    + "Style: Cornroll");
            mailService.sendMail(user);

            return user.toString();
        }catch (Exception ex){
            return ex.toString();
        }



        /*try {
            mailService.sendMail(user);

            return "successfully";
            } catch (MailException mailException) {
            return mailException.toString();
            } catch (Exception e) {
            return e.toString();
        }*/
    }

    @GetMapping("getmail")
    @ResponseBody public Iterable getMail(){
        return mailService.getMail();
    }
}
