package com.example.apptuneup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.RelativeLayout
import android.widget.TextView
import android.widget.Toast
import androidx.core.view.isVisible
import com.example.apptuneup.model.Workshop
import com.example.apptuneup.repository.OwnerRepository
import com.example.apptuneup.repository.WorkshopRepository
import com.example.apptuneup.retrofit.RetrofitConfig
import com.example.apptuneup.transitory.WorkshopTransitory
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class RegisterOpeningHoursActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_opening_hours)
    }
    fun redirectToRegisterAddressCompany(v: View){
        startActivity(Intent(this, RegisterAddressCompanyActivity::class.java))
    }
    fun registerWorkshop(v:View) {
        var idOwner = intent.getIntExtra("id_owner", 0)
        var workshopTransitory:WorkshopTransitory? = intent.getSerializableExtra("object_regisiter_workshop") as WorkshopTransitory?
        val cep:String = workshopTransitory!!.cep
        val road:String = workshopTransitory!!.rua
        val district:String = workshopTransitory!!.bairro
        val number:Int = workshopTransitory!!.numero
        val complement:String = workshopTransitory!!.complemento
        val name:String = workshopTransitory!!.nome
        val corpName:String = workshopTransitory!!.razaoSocial
        val cnpj:String = workshopTransitory!!.cnpj
        val email:String = workshopTransitory!!.email
        val phone:String = workshopTransitory!!.telefone
        val IE:String = workshopTransitory!!.ie
        val inputHrFunc:EditText = findViewById(R.id.et_opening_hour_company)
        val workshop = Workshop(0, name, corpName, IE, cnpj, cep, road, district,number,complement, phone,email,inputHrFunc.text.toString(), idOwner)
        val mRetrofit = RetrofitConfig.createService(WorkshopRepository::class.java)
        val call: Call<Void> = mRetrofit.register(workshop)
        call.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Toast.makeText(applicationContext, "Usuário cadastrado", Toast.LENGTH_SHORT).show()
                } else if (!response.isSuccessful) {
                    Toast.makeText(applicationContext, "Erro ao cadastrar oficina", Toast.LENGTH_SHORT).show()
                    var workshopTransitory:WorkshopTransitory? = intent.getSerializableExtra("object_regisiter_workshop") as WorkshopTransitory?
                    Toast.makeText(applicationContext, workshopTransitory.toString(), Toast.LENGTH_LONG).show()
                    val popUpError:RelativeLayout = findViewById(R.id.display_error_popup)
                    val textPopUpError:TextView = findViewById(R.id.txt_error_popup)
                    popUpError.isVisible = true;
                    textPopUpError.text = "Error:" + response.errorBody().toString() + "\n\n Message:" + (response.errorBody()
                        ?.string() ?: "err") + cnpj
                }
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                Toast.makeText(applicationContext, "Ops! houve um erro na conexão", Toast.LENGTH_SHORT).show()
            }

        })

    }
    fun closeErroPopUp(v:View) {
        val popUpError:RelativeLayout = findViewById(R.id.display_error_popup)
        popUpError.isVisible = false;
    }
}