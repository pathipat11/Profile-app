import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { TouchableOpacity, Text, Animated } from "react-native";
import { useMemo, useRef, useEffect } from "react";

function HeaderRightButton({ toggleTheme, darkMode }) {
    return (
        <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
            <Animated.Text
                style={{
                    fontSize: 14,
                    color: darkMode ? "#fff" : "#000",
                }}
            >
                {darkMode ? "🌞 Light" : "🌙 Dark"}
            </Animated.Text>
        </TouchableOpacity>
    );
}

function LayoutInner() {
    const { darkMode, toggleTheme } = useTheme();

    const screenOptions = useMemo(() => ({
        title: "Profile",
        headerRight: () => <HeaderRightButton toggleTheme={toggleTheme} darkMode={darkMode} />,
        headerStyle: {
            backgroundColor: darkMode ? "#121212" : "#f9f9f9",
        },
        headerTitleStyle: {
            color: darkMode ? "#fff" : "#000",
        },
        headerTintColor: darkMode ? "#fff" : "#000",
    }), [darkMode, toggleTheme]);

    return (
        <Stack>
            {/* key บังคับให้ React Navigation สร้าง header ใหม่เมื่อ darkMode เปลี่ยน */}
            <Stack.Screen
                key={darkMode ? "dark" : "light"}
                name="index"
                options={screenOptions}
            />
        </Stack>
    );
}


export default function Layout() {
    return (
        <ThemeProvider>
            <LayoutInner />
        </ThemeProvider>
    );
}
