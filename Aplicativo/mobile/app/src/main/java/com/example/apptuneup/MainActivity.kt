package com.example.apptuneup

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import androidx.fragment.app.Fragment
import com.example.apptuneup.fragments.*
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val clientsFragments = ClientsFragment()
        val employeeFragment = EmployeeFragment()
        val historyFragment = HistoryFragment()
        val servicesFragment = ServicesFragment()

        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)

        makeCurrentFragment(servicesFragment)
        bottomNavigationView.setOnItemSelectedListener {
            when (it.itemId) {
                R.id.navmenu_service -> makeCurrentFragment(servicesFragment)
                R.id.navmenu_clients -> makeCurrentFragment(clientsFragments)
                R.id.navmenu_employee -> makeCurrentFragment(employeeFragment)
                R.id.navmenu_history -> makeCurrentFragment(historyFragment)
            }
            true
        }
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.main_menu, menu)
        return super.onCreateOptionsMenu(menu)
    }

    private fun makeCurrentFragment(fragment : Fragment) =
        supportFragmentManager.beginTransaction().apply {
            replace(R.id.navmenu_main, fragment)
            commit()
        }
}