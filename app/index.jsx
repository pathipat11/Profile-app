import React, { useEffect, useRef } from "react";
import { 
    View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView, Animated 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "./context/ThemeContext";

const Profile = () => {
    const { darkMode } = useTheme();

    // Animated value 0 (light) to 1 (dark)
    const animation = useRef(new Animated.Value(darkMode ? 1 : 0)).current;

    // Animate on darkMode change
    useEffect(() => {
        Animated.timing(animation, {
        toValue: darkMode ? 1 : 0,
        duration: 400,
        useNativeDriver: false, // เพราะ color ไม่รองรับ native driver
        }).start();
    }, [darkMode]);

    // Interpolate colors from animation value
    const backgroundColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#f9f9f9", "#1a1a1a"],
    });
    const textColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#333", "#fff"],
    });
    const subTextColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#666", "#aaa"],
    });
    const cardColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#fff", "#2a2a2a"],
    });
    const shadowColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#ccc", "#000"],
    });

    return (
        <Animated.ScrollView style={{ backgroundColor }}>
        <Animated.View style={[styles.container, { backgroundColor }]}>
            {/* Profile */}
            <View style={styles.profileContainer}>
            <Image
                source={{ uri: "https://i.pravatar.cc/150?img=12" }}
                style={styles.avatar}
            />
            <Animated.Text style={[styles.name, { color: textColor }]}>
                Pathipat Mattra
            </Animated.Text>
            <Animated.Text style={[styles.bio, { color: subTextColor }]}>
                Student Number: 65345293-2
            </Animated.Text>
            </View>

            {/* University Info */}
            <Animated.View
            style={[
                styles.section,
                { backgroundColor: cardColor, shadowColor: shadowColor },
            ]}
            >
            <Animated.Text
                style={[
                styles.sectionTitle,
                { color: darkMode ? "#5daeff" : "#4a90e2" },
                ]}
            >
                Education
            </Animated.Text>
            <Animated.Text style={[styles.text, { color: subTextColor }]}>
                📚 Khon Kaen University
            </Animated.Text>
            <Animated.Text style={[styles.text, { color: subTextColor }]}>
                📘 Major: Computer Science
            </Animated.Text>
            <Animated.Text style={[styles.text, { color: subTextColor }]}>
                🎓 Program: Bachelor of Science in Computer Science
            </Animated.Text>
            </Animated.View>

            {/* Skills / Interest */}
            <Animated.View
            style={[
                styles.section,
                { backgroundColor: cardColor, shadowColor: shadowColor },
            ]}
            >
            <Animated.Text
                style={[
                styles.sectionTitle,
                { color: darkMode ? "#5daeff" : "#4a90e2" },
                ]}
            >
                Interests
            </Animated.Text>
            <Animated.Text style={[styles.text, { color: subTextColor }]}>
                🔧 Interested in Web Application Development, especially Back-end.
                Passionate about becoming a Software Engineer.
            </Animated.Text>
            </Animated.View>

            {/* Contact Cards */}
            <Animated.View
            style={[
                styles.section,
                { backgroundColor: cardColor, shadowColor: shadowColor },
            ]}
            >
            <Animated.Text
                style={[
                styles.sectionTitle,
                { color: darkMode ? "#5daeff" : "#4a90e2" },
                ]}
            >
                Contact
            </Animated.Text>
            <View style={styles.cardGroup}>
                {[
                {
                    icon: "facebook-square",
                    color: "#4267B2",
                    label: "Facebook",
                    value: "Pathipat Mattra",
                    link: "https://facebook.com/pathipat.mattra",
                },
                {
                    icon: "github",
                    color: "#000",
                    label: "GitHub",
                    value: "pathipat11",
                    link: "https://github.com/pathipat11",
                },
                {
                    icon: "linkedin-square",
                    color: "#0077B5",
                    label: "LinkedIn",
                    value: "Pathipat Mattra",
                    link: "https://linkedin.com/in/viixl",
                },
                ].map((item, idx) => (
                <TouchableOpacity
                    key={idx}
                    style={[styles.contactCard, { backgroundColor: cardColor, shadowColor: shadowColor }]}
                    activeOpacity={0.8}
                    onPress={() => Linking.openURL(item.link)}
                >
                    <Icon name={item.icon} size={24} color={item.color} style={styles.cardIcon} />
                    <View>
                    <Animated.Text style={[styles.cardTitle, { color: textColor }]}>
                        {item.label}
                    </Animated.Text>
                    <Animated.Text style={[styles.cardText, { color: subTextColor }]}>
                        {item.value}
                    </Animated.Text>
                    </View>
                </TouchableOpacity>
                ))}
            </View>
            </Animated.View>

            {/* Stats */}
            <Animated.View style={[styles.infoContainer, { backgroundColor: cardColor, shadowColor: shadowColor }]}>
            {[
                { label: "Projects", value: "12" },
                { label: "Followers", value: "340" },
                { label: "Following", value: "180" },
            ].map((item, idx) => (
                <View key={idx} style={styles.infoBox}>
                <Animated.Text style={[styles.infoLabel, { color: darkMode ? "#bbb" : "#888" }]}>
                    {item.label}
                </Animated.Text>
                <Animated.Text style={styles.infoValue}>{item.value}</Animated.Text>
                </View>
            ))}
            </Animated.View>
        </Animated.View>
        </Animated.ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: "#4a90e2",
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    bio: {
        fontSize: 16,
        color: "#666",
        marginTop: 2,
    },
    section: {
        width: "100%",
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#4a90e2",
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: "#444",
        marginBottom: 4,
    },
    cardGroup: {
        gap: 12, // ระยะห่างระหว่าง card
    },
    contactCard: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        padding: 12,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    cardIcon: {
        marginRight: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: "600",
    },
    cardText: {
        fontSize: 13,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoBox: {
        alignItems: "center",
    },
    infoLabel: {
        fontSize: 14,
    },
    infoValue: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4a90e2",
    },
});
