package com.example.apptuneup

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.RelativeLayout
import androidx.appcompat.app.AlertDialog
import androidx.core.view.isGone
import androidx.core.view.isVisible

class RegisterClutchServicesActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_clutch_services)
    }

    fun showPopUpTerms(v:View) {
        val containerPopUp:RelativeLayout = findViewById(R.id.rl_conainer_popup_terms)
        containerPopUp.isGone = false
    }

    fun gonePopUpTerms(v:View) {
        val containerPopUp:RelativeLayout = findViewById(R.id.rl_conainer_popup_terms)
        containerPopUp.isGone = true
    }


}