import React from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Block, Button, Card, Icon, Input, NavBar, Text} from 'galio-framework';

class LinksScreen extends React.Component{
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity  onPress={() => navigate('Movie')}>
                        <Card
                            flex
                            borderless
                            style={styles.card}
                            title="6 Underground"
                            caption="Durée : 2h08"
                            location="USA, 2019"
                            avatar="https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/10/netflix.jpg"
                            image="http://hdqwalls.com/wallpapers/6-underground-4k-hj.jpg"

                        />
                        </TouchableOpacity>


                    <Card
                        flex
                        borderless
                        style={styles.card}
                        title="Joker"
                        caption="Durée : 2h02"
                        location="USA, Canada 2019"
                        avatar="https://www.graphiline.com/src/images/news/articles/ef02d5c81d0baca2b6242d46520a2117.jpg"
                        image="https://www.julsa.fr/wp-content/uploads/2019/10/joker.jpg"
                    />
                    <Card
                        flex
                        borderless
                        style={styles.card}
                        title="Le mans 66"
                        caption="Durée : 2h33"
                        location="USA 2019"
                        avatar="https://yt3.ggpht.com/a/AGF-l78s1QkkLeDJ_jR_5m_Rpf3BdxaVr0zF0V4n8w=s900-c-k-c0xffffffff-no-rj-mo"
                        image="https://freakingeek.com/wp-content/uploads/2019/11/LeMans66-Banniere-800x445.jpg"
                    />
                    <Card
                        flex
                        borderless
                        style={styles.card}
                        title="Le chant du loup"
                        caption="Durée : 1h56"
                        location="France 2019"
                        avatar="https://yt3.ggpht.com/a/AGF-l78s1QkkLeDJ_jR_5m_Rpf3BdxaVr0zF0V4n8w=s900-c-k-c0xffffffff-no-rj-mo"
                        image="https://static.latribune.fr/full_width/1127343/chant-du-loup.jpg"
                    />
                    <Card
                        flex
                        borderless
                        style={styles.card}
                        title="Uncut James"
                        caption="Durée : 2h15"
                        location="USA 2019"
                        avatar="https://www.graphiline.com/src/images/news/articles/ef02d5c81d0baca2b6242d46520a2117.jpg"
                        image="https://media.paperblog.fr/i/898/8984665/premiere-affiche-teaser-us-uncut-gems-benny-j-L-YiC4wz.jpeg"
                    />
                </View>
            </ScrollView>
        );
    }
}

LinksScreen.navigationOptions = {
    title: 'Tous nos films',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
    },
    card: {
        marginBottom: 2.5,
        marginTop: 2.5,
    },
});

export default LinksScreen;
