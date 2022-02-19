package com.example.apptuneup

import android.content.Intent
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.*
import androidx.annotation.RequiresApi
import androidx.core.view.isGone
import com.example.apptuneup.db.DatabaseHandler
import com.example.apptuneup.model.Login
import com.example.apptuneup.model.Owner
import com.example.apptuneup.model.OwnerModel
import com.example.apptuneup.model.RegisterOwner
import com.example.apptuneup.repository.OwnerRepository
import com.example.apptuneup.retrofit.RetrofitConfig
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.text.SimpleDateFormat
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.util.*

class OwnerRegisterActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_owner_register)
    }
    var dataNascOwner:String = ""
    fun pickData(v:View) {
        val popUpDatePicker:RelativeLayout = findViewById(R.id.rl_popup_register_date_nasc_owner)
        popUpDatePicker.isGone = false;
    }
    fun cancelPickData(v:View) {
        val popUpDatePicker:RelativeLayout = findViewById(R.id.rl_popup_register_date_nasc_owner)
        popUpDatePicker.isGone = true;
    }
    fun confirmDate(v:View) {
        val popUpDatePicker:RelativeLayout = findViewById(R.id.rl_popup_register_date_nasc_owner)
        popUpDatePicker.isGone = true;
        var inputData:DatePicker = findViewById(R.id.dp_data_nasc_owner)
        val textInfoDateNascOwne:TextView = findViewById(R.id.tv_text_date_nasc_owner)
        var stringDayOfBirthDayOwner:String = "" + inputData.dayOfMonth
        var stringMonthOfBirthDayOwner:String = "" + (inputData.month + 1)
        if(inputData.dayOfMonth <= 9) {
            stringDayOfBirthDayOwner = "0" + inputData.dayOfMonth
        }
        if((inputData.month+1) <= 9) {
            stringMonthOfBirthDayOwner = "0" + (inputData.month + 1)
        }
        textInfoDateNascOwne.text = "" + stringDayOfBirthDayOwner + "/" +stringMonthOfBirthDayOwner+"/" +inputData.year
        dataNascOwner = "" + inputData.year + "-" +stringMonthOfBirthDayOwner+"-" + stringDayOfBirthDayOwner
    }
    fun registerOwner(v: View) {

        val mRetrofit = RetrofitConfig.createService(OwnerRepository::class.java)

        var nameOwner:EditText = findViewById(R.id.et_fullname)
        var emailOwner:EditText = findViewById(R.id.et_email_owner)
        var cpfOwner:EditText = findViewById(R.id.et_cpf_owner)
        var phoneOwner:EditText = findViewById(R.id.et_phone_owner)
        var passwordOwner:EditText = findViewById(R.id.et_password_owner)
        var confirmPasswordOwner:EditText = findViewById(R.id.et_password_confirm_owner)
        Toast.makeText(applicationContext, "Data: " + dataNascOwner, Toast.LENGTH_LONG).show()
        if(passwordOwner.text.toString().equals(confirmPasswordOwner.text.toString())) {
            var ownerObject:RegisterOwner = RegisterOwner(nameOwner.text.toString(),emailOwner.text.toString(), cpfOwner.text.toString(), dataNascOwner, phoneOwner.text.toString(), passwordOwner.text.toString(), 1)

            val call: Call<Int> = mRetrofit.register(ownerObject)
            with(call) {
                enqueue(object :Callback<Int> {
                        override fun onResponse(call: Call<Int>, response: Response<Int>) {
                            if (response.isSuccessful) {
<<<<<<< HEAD
                                val interntRegisterCompany = Intent(this@OwnerRegisterActivity, RegisterOpeningHoursActivity::class.java)
                                interntRegisterCompany.putExtra("id_owner",response.body().toString().toInt())
                                startActivity(interntRegisterCompany)
=======
                                val intentRegisterCompany = Intent(this@OwnerRegisterActivity, RegisterCompanyActivity::class.java)
                                var db = DatabaseHandler(application)
                                var fkProp:FkProp? = response.body()?.let { FkProp(0, it) }
                                fkProp?.let { db.addIdProp(it) }
                                var idOwner:Int = db.getIdProp()
                                startActivity(intentRegisterCompany)
>>>>>>> edaec643b73b27cbbf83c63d789a54eea75ede73
                            } else if (response.errorBody().toString().length > 1) {
                                Toast.makeText(applicationContext, "Erro: " + response.errorBody(), Toast.LENGTH_LONG).show()
                            }
                            nameOwner.setText(response.headers().toString())
                        }

                        override fun onFailure(call: Call<Int>, t: Throwable) {
                            Toast.makeText(applicationContext, "Ops! houve um erro na conexão" + t, Toast.LENGTH_LONG).show()
                        }

                    })
            }

        } else {
            Toast.makeText(applicationContext, "As senhas estão diferentes", Toast.LENGTH_SHORT).show()
        }

    }
}