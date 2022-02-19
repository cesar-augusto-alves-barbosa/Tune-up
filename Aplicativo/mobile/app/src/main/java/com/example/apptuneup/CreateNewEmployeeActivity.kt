package com.example.apptuneup

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.RelativeLayout
import androidx.core.view.isGone

class CreateNewEmployeeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_new_employee)
    }

    fun showPopUpNewEmployee(v: View) {
        val containerPopUp:RelativeLayout = findViewById(R.id.rl_container_popup_new_employee)
        containerPopUp.isGone = false
    }

    fun gonePopUpNewEmployee(v: View) {
        val containerPopUp:RelativeLayout = findViewById(R.id.rl_container_popup_new_employee)
        containerPopUp.isGone = true
    }
}
