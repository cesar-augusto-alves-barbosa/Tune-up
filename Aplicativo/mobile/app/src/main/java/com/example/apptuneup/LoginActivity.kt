package com.example.apptuneup

import android.os.Build
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import com.example.apptuneup.db.DatabaseHandler
<<<<<<< HEAD
import com.example.apptuneup.model.Login
import android.widget.TextView
import android.widget.Toast
import com.example.apptuneup.model.OwnerModel
=======
import android.widget.TextView
import android.widget.Toast
>>>>>>> edaec643b73b27cbbf83c63d789a54eea75ede73
import com.example.apptuneup.repository.OwnerRepository
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
<<<<<<< HEAD
import androidx.activity.result.contract.ActivityResultContracts
import com.example.apptuneup.model.RegisterOwner
=======
import com.example.apptuneup.retrofit.RetrofitConfig
import com.example.apptuneup.models.Login
import com.example.apptuneup.models.OwnerModel
>>>>>>> edaec643b73b27cbbf83c63d789a54eea75ede73

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        fillInputs()
    }

    private fun fillInputs() {
        var db = DatabaseHandler(application)

        var edEmail: EditText = findViewById(R.id.et_email_login)
        var edSenha: EditText = findViewById(R.id.et_password_login)

        if (edEmail.text == null || edSenha.text.toString() == "" || edSenha.text == null || edSenha.text.toString() == "") {
            println("Campos vazios")
            println(db.getLoginList().toString())
            if(db.getLoginList().size > 0) {
                edEmail.setText(db.getLoginBySerial(Build.ID).email.toString())
                edSenha.setText(db.getLoginBySerial(Build.ID).senha.toString())
            }
        }
    }

    fun chama(v: View) {
        var login = Login(0, Build.ID, "email", "senha")
        var db = DatabaseHandler(application)
        db.addLogin(login)
        println(db.getLoginList().toString())
    }


    fun signIn(v: View) {
        var db = DatabaseHandler(application)

        var edEmail: EditText = findViewById(R.id.et_email_login)
        var edSenha: EditText = findViewById(R.id.et_password_login)
        var login = Login(0, Build.ID, edEmail.text.toString(), edSenha.text.toString())
        db.addLogin(login)
        println(db.getLoginList().toString())


        val mRetrofit = RetrofitConfig.createService(OwnerRepository::class.java)

        var inputEmail: EditText = findViewById(R.id.et_email_login)
        var inputPassword: EditText = findViewById(R.id.et_password_login)
        var responseText: TextView = findViewById(R.id.tv_tile_login)
<<<<<<< HEAD
        var ownerObject:OwnerModel = OwnerModel(inputEmail.text.toString(), inputPassword.text.toString())
=======
        var ownerObject: OwnerModel = OwnerModel(inputEmail.text.toString(), inputPassword.text.toString())
>>>>>>> edaec643b73b27cbbf83c63d789a54eea75ede73
        val call: Call<Void> = mRetrofit.loginOwner(ownerObject)
        call.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    startActivity(Intent(this@LoginActivity, MainActivity::class.java))
                } else if (response.code() == 401) {
                    Toast.makeText(applicationContext, "Email ou senha invalidos", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                Toast.makeText(applicationContext, "Ops! houve um erro na conexão", Toast.LENGTH_SHORT).show()
            }

        })
    }

    fun redirectToRegisterCompany(v:View){
        startActivity(Intent(this, OwnerRegisterActivity::class.java))
    }
}
