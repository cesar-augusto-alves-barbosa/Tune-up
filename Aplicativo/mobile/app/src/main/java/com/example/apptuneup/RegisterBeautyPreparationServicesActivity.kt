package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class RegisterBeautyPreparationServicesActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_beauty_preparation_services)
    }
    fun redirectToRegisterEletricalEletronicsService(v: View){
        startActivity(Intent(this, RegisterElectricalElectronicsServiceActivity::class.java))
    }
    fun redirectToRegisterEngineService(v:View){
        startActivity(Intent(this, RegisterEngineServiceActivity::class.java))
    }
}