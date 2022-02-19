package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast
import com.example.apptuneup.transitory.WorkshopTransitory

class RegisterCompanyActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_company)
    }
    fun redirectToLogin(v: View){
        startActivity(Intent(this, LoginActivity::class.java))
    }
    fun redirectToRegisterAddressCompany(v: View){
        val IntentRegisterAddress = Intent(this, RegisterAddressCompanyActivity::class.java)
        var workshopName = findViewById<EditText>(R.id.et_name_company)
        var workshopCorporateName = findViewById<EditText>(R.id.et_corporate_name)
        var workshopCnpj = findViewById<EditText>(R.id.et_cnpj_company)
        var workshopEmail = findViewById<EditText>(R.id.et_email_company)
        var workshopPhone = findViewById<EditText>(R.id.et_phone_company)
        var workshopState = findViewById<EditText>(R.id.et_state_registration)
        val workshopTransitory: WorkshopTransitory = WorkshopTransitory()
        workshopTransitory.nome = workshopName.text.toString()
        workshopTransitory.razaoSocial = workshopCorporateName.text.toString()
        workshopTransitory.cnpj = workshopCnpj.text.toString()
        workshopTransitory.email = workshopEmail.text.toString()
        workshopTransitory.telefone = workshopPhone.text.toString()
        workshopTransitory.ie = workshopState.text.toString()
        IntentRegisterAddress.putExtra("object_regisiter_workshop",
            workshopTransitory)

        startActivity(IntentRegisterAddress)
    }
}