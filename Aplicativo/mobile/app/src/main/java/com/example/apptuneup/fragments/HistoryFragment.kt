package com.example.apptuneup.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.RelativeLayout
import androidx.fragment.app.FragmentTransaction
import com.example.apptuneup.R

class HistoryFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val v = inflater.inflate(R.layout.fragment_history, container, false)


        val relativelRedirect = v.findViewById<RelativeLayout>(R.id.rl_history_order)
        relativelRedirect.setOnClickListener {
            val orderHistoryFragment = OrderHistoryFragment()
            val transaction: FragmentTransaction = childFragmentManager.beginTransaction()
            transaction.replace(R.id.rl_screen_order_history, orderHistoryFragment)
            transaction.commit()
        }
        return v
    }
}