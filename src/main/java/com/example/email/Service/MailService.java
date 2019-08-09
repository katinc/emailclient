package com.example.email.Service;

import com.example.email.Model.User;
import com.example.email.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class MailService {

    @Autowired
    UserRepository userRepository;

    private JavaMailSender javaMailSender;

    @Autowired
    public MailService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendMail(User user){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmailReceiver());
        mail.setSubject(user.getEmailSubject());
        mail.setText(user.getEmailMessage());
        user.setTimestamp(new Date());

        userRepository.save(user);
        javaMailSender.send(mail);

    }

    public Iterable<User> getMail(){
        return userRepository.findAll();
    }
}
