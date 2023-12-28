package com.petadoption.mypet.Service;

import com.petadoption.mypet.Exceptions.EmailServerTimeoutException;
import com.petadoption.mypet.Model.EmailDetails;

public interface IMailSender {

    boolean sendEmail(EmailDetails emailDetails);
}
