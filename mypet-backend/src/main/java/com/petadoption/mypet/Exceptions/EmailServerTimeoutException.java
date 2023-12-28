package com.petadoption.mypet.Exceptions;

public class EmailServerTimeoutException extends RuntimeException {
    public EmailServerTimeoutException(String message) {
        super(message);
    }
}
