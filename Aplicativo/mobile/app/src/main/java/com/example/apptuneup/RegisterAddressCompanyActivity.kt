package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast
import com.example.apptuneup.transitory.WorkshopTransitory
import java.io.Serializable

class RegisterAddressCompanyActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_resgister_address_company)
    }

    fun redirectToRegisterOpeningHours(v: View){
        val IntentRegisterOpeningHours = Intent(this, RegisterOpeningHoursActivity::class.java)
        var workshopTransitory:WorkshopTransitory? = intent.getSerializableExtra("object_regisiter_workshop") as WorkshopTransitory?
        workshopTransitory?.cep= findViewById<EditText>(R.id.et_cep).text.toString()
        workshopTransitory?.rua = findViewById<EditText>(R.id.et_road_company).text.toString()
        workshopTransitory?.bairro = findViewById<EditText>(R.id.et_district_company).text.toString()
        workshopTransitory?.numero = findViewById<EditText>(R.id.et_residential_number_company).text.toString().toInt()
        workshopTransitory?.complemento = findViewById<EditText>(R.id.et_complement_company).text.toString()
        intent.removeExtra("object_regisiter_workshop")
        IntentRegisterOpeningHours.putExtra("object_regisiter_workshop",
            workshopTransitory)
        startActivity(IntentRegisterOpeningHours)
    }
    fun redirectToRegisterCompany(v:View){
        startActivity(Intent(this, RegisterCompanyActivity::class.java))
    }
}