import React from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Block, Button, Card, Icon, Input, NavBar, Text} from 'galio-framework';

class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [
                {title: '6 Underground', caption: 'Durée : 2h08', desc: 'Quel est le meilleur avantage d’être mort ? Ce n’est pas d’échapper à votre patron, à votre ex, ou même d’effacer votre casier judiciaire. Ce qu’il y a de mieux avec la mort ... c’est la liberté. La liberté de lutter contre l\'injustice et le mal qui rôdent dans notre monde, sans que rien ni quiconque ne vous arrête.\n' +
                        'Six individus, issus des quatre coins du monde, tous, les meilleurs dans leur domaine, ont été choisis non seulement pour leurs compétences, mais aussi pour leur désir unique d’effacer leur passé afin de changer l\'avenir.  La bande est réunie par un leader énigmatique, dont le seul objectif est de s\'assurer que tous tomberont dans l’oubli mais que leurs actions, pour sûr, leur survivront', location: 'USA, 2019', avatar: 'https://pbs.twimg.com/profile_images/1212668668657754112/Tkyjal3Z_400x400.jpg', image: 'http://hdqwalls.com/wallpapers/6-underground-4k-hj.jpg'},
                {title: 'Joker', caption: 'Durée : 2h02', desc: 'Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société.', location: 'USA, Canada 2019', avatar: 'https://www.graphiline.com/src/images/news/articles/ef02d5c81d0baca2b6242d46520a2117.jpg', image: 'https://www.julsa.fr/wp-content/uploads/2019/10/joker.jpg'},
                {title: 'Le mans 66', caption: 'Durée : 2h33', desc: 'Basé sur une histoire vraie, le film suit une équipe d\'excentriques ingénieurs américains menés par le visionnaire Carroll Shelby et son pilote britannique Ken Miles, qui sont envoyés par Henry Ford II pour construire à partir de rien une nouvelle automobile qui doit détrôner la Ferrari à la compétition du Mans de 1966.', location: 'USA 2019', avatar: 'https://yt3.ggpht.com/a/AGF-l78s1QkkLeDJ_jR_5m_Rpf3BdxaVr0zF0V4n8w=s900-c-k-c0xffffffff-no-rj-mo', image: 'https://freakingeek.com/wp-content/uploads/2019/11/LeMans66-Banniere-800x445.jpg'},
                {title: 'Le chant du loup', caption: 'Durée : 1h56', desc: 'Un jeune homme a le don rare de reconnaître chaque son qu’il entend. A bord d’un sous-marin nucléaire français, tout repose sur lui, l’Oreille d’Or.\n' +
                        'Réputé infaillible, il commet pourtant une erreur qui met l’équipage en danger de mort. Il veut retrouver la confiance de ses camarades mais sa quête les entraîne dans une situation encore plus dramatique.\n' +
                        'Dans le monde de la dissuasion nucléaire et de la désinformation, ils se retrouvent tous pris au piège d’un engrenage incontrôlable.', location: 'France 2019', avatar: 'https://yt3.ggpht.com/a/AGF-l78s1QkkLeDJ_jR_5m_Rpf3BdxaVr0zF0V4n8w=s900-c-k-c0xffffffff-no-rj-mo', image: 'https://static.latribune.fr/full_width/1127343/chant-du-loup.jpg'},
                {title: 'Uncut James', caption: 'Durée : 2h15', desc: 'Un propriétaire de bijouterie, au sein de Diamond District à New York, et revendeur à ses heures perdues, voit sa vie bouleversée lorsque sa marchandise est volée.', location: 'USA 2019', avatar: 'https://www.graphiline.com/src/images/news/articles/ef02d5c81d0baca2b6242d46520a2117.jpg', image: 'https://media.paperblog.fr/i/898/8984665/premiere-affiche-teaser-us-uncut-gems-benny-j-L-YiC4wz.jpeg'}
            ]
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.state.films.map(film => {
                            return (
                                <TouchableOpacity onPress={() => navigate('Movie',{film: film})}>
                                    <Card
                                        flex
                                        borderless
                                        style={styles.card}
                                        title={film.title}
                                        caption={film.caption}
                                        location={film.location}
                                        avatar={film.avatar}
                                        image={film.image}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
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
