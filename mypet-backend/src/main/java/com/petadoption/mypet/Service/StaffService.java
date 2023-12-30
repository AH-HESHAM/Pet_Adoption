package com.petadoption.mypet.Service;

import com.petadoption.mypet.Model.Entity.Staff;
import com.petadoption.mypet.Model.Repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {
    @Autowired
    private StaffRepository staffRepository;

    public List<Staff> getAllStaffForManager(int managerId) {
        return staffRepository.getStaffByManager(managerId);
    }
}
