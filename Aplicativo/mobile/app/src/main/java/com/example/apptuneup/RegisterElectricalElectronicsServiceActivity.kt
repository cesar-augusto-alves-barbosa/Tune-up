package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class RegisterElectricalElectronicsServiceActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_electrical_electronics_service)
    }
    fun redirectToRegisterBeautyPreparation(v: View){
        startActivity(Intent(this, RegisterBeautyPreparationServicesActivity::class.java))
    }
}