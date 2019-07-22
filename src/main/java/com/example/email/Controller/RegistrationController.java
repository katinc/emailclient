package com.example.email.Controller;

import com.example.email.Model.User;
import com.example.email.Service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    private MailService mailService;

    @Autowired
    private User user;

    @RequestMapping("sendmail")
    public String send(){

        user.setEmailAddress("rebecca.owusu1500@gmail.com");

        try {
            mailService.sendMail(user);
            } catch (MailException mailException) {
            System.out.println(mailException);
            } catch (Exception e) {
            System.out.println(e);
        }

        return "sent";
    }
}
