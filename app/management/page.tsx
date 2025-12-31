"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import {
  FileText,
  Users,
  TrendingUp,
  PlusCircle,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

/* =======================
   Types
======================= */

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: "blue" | "green";
  change?: number;
  isDark: boolean;
  description?: string;
}

/* =======================
   Stat Card Component
======================= */

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  color,
  change,
  isDark,
  description,
}) => {
  const styles = {
    blue: {
      bg: isDark ? "bg-blue-500/10" : "bg-blue-50",
      border: isDark ? "border-blue-500/20" : "border-blue-100",
      gradient: isDark
        ? "from-blue-900/20 to-blue-500/5"
        : "from-blue-50 to-white",
    },
    green: {
      bg: isDark ? "bg-green-500/10" : "bg-green-50",
      border: isDark ? "border-green-500/20" : "border-green-100",
      gradient: isDark
        ? "from-green-900/20 to-green-500/5"
        : "from-green-50 to-white",
    },
  }[color];

  return (
    <div
      className={`p-6 rounded-2xl border bg-gradient-to-br ${styles.gradient} transition-all hover:shadow-xl hover:-translate-y-1 ${
        isDark ? "border-slate-700/50" : "border-gray-100 shadow-sm"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-gray-500"}`}>
            {title}
          </p>
          <h3
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {value.toLocaleString()}
          </h3>

          {description && (
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-slate-500" : "text-gray-500"
              }`}
            >
              {description}
            </p>
          )}

          {change !== undefined && (
            <div className="flex items-center gap-1 mt-3">
              <TrendingUp
                className={`w-4 h-4 ${
                  change >= 0 ? "text-green-500" : "text-red-500 rotate-180"
                }`}
              />
              <span
                className={`text-sm font-semibold ${
                  change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {change >= 0 ? "+" : ""}
                {change}%
              </span>
              <span
                className={`text-sm ${
                  isDark ? "text-slate-500" : "text-gray-400"
                }`}
              >
                vs last month
              </span>
            </div>
          )}
        </div>

        <div
          className={`p-3 rounded-xl border ${styles.bg} ${styles.border}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

/* =======================
   Admin Dashboard
======================= */

export default function AdminDashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSchemes, setTotalSchemes] = useState(0);
  const [loading, setLoading] = useState(true);

  /* =======================
     Fetch Stats
  ======================= */

  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await fetch("/management/api");
      const data = await res.json();

      setTotalUsers(data.totalUsers ?? 0);
      setTotalSchemes(data.schemecount ?? 0);
    } catch (err) {
      console.error("Failed to load dashboard stats", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  /* =======================
     UI
  ======================= */

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Admin Dashboard
          </h1>
          <p
            className={`text-sm mt-1 ${
              isDark ? "text-slate-400" : "text-gray-500"
            }`}
          >
            Manage government schemes and platform analytics
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={fetchStats}
            disabled={loading}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition ${
              isDark
                ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <RefreshCw
              className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </button>

        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title="Total Schemes"
          value={totalSchemes}
          icon={<FileText className="w-6 h-6 text-blue-500" />}
          color="blue"
          change={12}
          isDark={isDark}
          description="Government schemes on the platform"
        />

        <StatCard
          title="Total Users"
          value={totalUsers}
          icon={<Users className="w-6 h-6 text-green-500" />}
          color="green"
          change={24}
          isDark={isDark}
          description="Registered beneficiaries"
        />
      </div>

      {/* Platform Stats */}
      <div
        className={`rounded-2xl border p-6 ${
          isDark
            ? "bg-slate-800/50 border-slate-700/50"
            : "bg-white border-gray-100 shadow-lg"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Platform Statistics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-between">
            <span className={isDark ? "text-slate-400" : "text-gray-600"}>
              Total Categories
            </span>
            <span className="font-semibold">4</span>
          </div>

          <div className="flex justify-between">
            <span className={isDark ? "text-slate-400" : "text-gray-600"}>
              System Status
            </span>
            <span className="flex items-center gap-1 text-green-500 font-semibold">
              <CheckCircle className="w-4 h-4" /> Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
