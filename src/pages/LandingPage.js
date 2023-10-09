import {Box, Button, ChakraProvider, Flex, Heading, Image, Link, Text} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import banner from "../images/banner.jpg";
import signup from "../images/signup.jpg";
import gallery from "../images/gallery.jpg";
import update from "../images/update.jpg";
import about from "../images/afgallery.png";
import introData from "../introdata.json";
import featuresData from "../featuresdata.json";
import aboutData from "../aboutdata.json";

function LandingPage() {
    const [features, setFeatures] = useState([]);
    const [aboutinfo, setAboutinfo] = useState([]);
    const [intro, setIntro] = useState([]);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const externalUrl = 'https://artfinderx.com';

    useEffect(() => {
        // Simulate fetching features data from an API
        setFeatures(featuresData);
        setAboutinfo(aboutData);
        setIntro(introData);

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ChakraProvider>
            <Box>
                {/* Menu Bar */}
                <Flex
                    align="center"
                    justify="space-between"
                    p={4}
                    top={0}
                    position="sticky"
                    zIndex={1}
                    bg="white"
                >
                    <Heading as="h1" fontSize="xl">
                        {introData[0].name}
                    </Heading>
                    <Flex display={{base: "none", md: "flex"}}>
                        <Link href="#" fontSize="xl" mr={8} fontWeight="semibold">
                            Home
                        </Link>
                        <Link href="#features" fontSize="xl" mr={8} fontWeight="semibold">
                            Features
                        </Link>
                        <Link href="#about" fontSize="xl" mr={8} fontWeight="semibold">
                            About
                        </Link>
                        <Link href="#work" fontSize="xl" mr={{base: 0, md: 20}} fontWeight="semibold">
                            How It Works
                        </Link>
                    </Flex>
                    <Box display={{base: "block", md: "none"}} onClick={() => setMenuOpen(!isMenuOpen)}>
                        <HamburgerIcon boxSize={6}/>
                    </Box>
                </Flex>

                {/* Responsive Menu */}
                {isMenuOpen && (
                    <Flex direction="column" p={4} bg="white">
                        <Link href="#" fontSize="xl" my={2} fontWeight="semibold">
                            Home
                        </Link>
                        <Link href="#features" fontSize="xl" my={2} fontWeight="semibold">
                            Features
                        </Link>
                        <Link href="#about" fontSize="xl" my={2} fontWeight="semibold">
                            About
                        </Link>
                        <Link href="#work" fontSize="xl" my={2} fontWeight="semibold">
                            How It Works
                        </Link>
                    </Flex>
                )}

                {/* Intro Section */}
                {viewportWidth <= 480 ? (
                    <Flex bg="gray.100" position="relative" alignItems="center" minHeight="100vh">
                        <Box position="absolute" top={0} left={0} width="100%" height="100%">
                            <Image src={banner} alt="Cover Image" objectFit="cover" width="100%" height="100%" />
                        </Box>

                        <Box position="relative" zIndex={1} p={12} textAlign="left" color="black"  bg="white" width="100%" maxWidth="40rem" mx="auto">
                            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} mb={4}>
                                {introData[0].name}
                            </Heading>
                            <Text fontSize={{ base: "xl", md: "2xl" }} mb={4} fontWeight="light">
                                {introData[0].desc}
                            </Text>
                            <Button 
                            as="a"
                            colorScheme="blue" 
                            size="lg" 
                            mt={12} 
                            href={externalUrl} 
                            target="_blank"
                            rel="noopener noreferrer">
                                Explore ArtFinderX
                            </Button>
                        </Box>
                    </Flex>
                ) : (
                    <Flex bg="gray.100" position="relative" alignItems="center" height="100vh">
                        <Box position="absolute" top={0} left={0} width="100%" height="100%">
                            <Image src={banner} alt="Cover Image" objectFit="cover" width="100%" height="100%" />
                        </Box>

                        <Box position="relative" zIndex={1} p={12} textAlign="left" color="black" width="40%" bg="white">
                            <Heading as="h1" fontSize="4xl" mb={4}>
                                {introData[0].name}
                            </Heading>
                            <Text fontSize="xl" mb={4} fontWeight="light">
                                {introData[0].desc}
                            </Text>
                            <Button 
                            as="a"
                            href={externalUrl}
                            colorScheme="blue" 
                            size="lg" 
                            mt={12}
                            target="_blank"
                            rel="noopener noreferrer">
                                Explore ArtFinderX
                            </Button>
                        </Box>
                    </Flex>
                )}



                {/* Featured Section */}
                <Box mt={16} mx={10} id="features">
                    <Heading as="h4" fontSize="4xl" mb={4} textAlign="center" color="#3182ce">
                        Art Finder Features
                    </Heading>
                    <Heading as="h1" fontSize="xl" textAlign="center" fontWeight="light">
                        Here are some of the exciting features of ArtFinderX
                    </Heading>
                    <Flex direction="column" mt={8}>
                        {/* Feature 1 */}
                        <Flex alignItems="start" flexDirection={{base: "column", md: "row"}} height="auto" mb={24}>
                            <Box flex="1">
                                <Image src={signup} alt="Feature 1"/>
                            </Box>
                            <Box flex="1" ml={{base: 0, md: 8}}>
                                <Heading as="h4" fontSize="3xl" mt={{base: 4, md: 12}}>
                                    {featuresData[0].name}
                                </Heading>
                                <Text mt={4} fontSize={{base: "xl", md: "2xl"}} fontWeight="light">
                                    {featuresData[0].description}
                                </Text>
                            </Box>
                        </Flex>

                        {/* Feature 2 */}
                        <Flex alignItems="start" flexDirection={{base: "column-reverse", md: "row"}} height="auto"
                              mb={24}>
                            <Box flex="1" ml={{base: 0, md: 8}}>
                                <Heading as="h3" fontSize="3xl" mt={4}>
                                    {featuresData[1].name}
                                </Heading>
                                <Text mt={4} fontSize={{base: "xl", md: "2xl"}} fontWeight="light">
                                    {featuresData[1].description}
                                </Text>
                            </Box>
                            <Box flex="1">
                                <Image src={gallery} alt="Feature 2"/>
                            </Box>
                        </Flex>

                        {/* Feature 3 */}
                        <Flex alignItems="start" flexDirection={{base: "column", md: "row"}} height="auto" mb={24}>
                            <Box flex="1">
                                <Image src={update} alt="Feature 3"/>
                            </Box>
                            <Box flex="1" ml={{base: 0, md: 8}}>
                                <Heading as="h3" fontSize="3xl" mt={4}>
                                    {featuresData[2].name}
                                </Heading>
                                <Text mt={4} fontSize={{base: "xl", md: "2xl"}} fontWeight="light">
                                    {featuresData[2].description}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>

                {/* About Section */}
                <Box mt={16} mx={10} textAlign="center">
                    <Heading as="h2" fontSize={{base: '2xl', md: '3xl'}} mb={4}>
                        About ArtFinderX
                    </Heading>
                </Box>
                <Box mt={16} mx={10} id="about" minHeight="400px" display="flex"
                     flexDirection={{base: 'column', md: 'row'}} boxShadow="xl">
                    {/* Image */}
                    <Box flex={{base: '1', md: '1'}}>
                        <Image src={about} alt="About Image" h={{base: '40%', md: '80%'}} objectFit="cover"/>
                    </Box>

                    {/* Text */}
                    <Box flex={{base: '1', md: '1'}} p={8} textAlign="left">
                        {aboutData.map((item, index) => (
                            <div key={index}>
                                <Heading as="h2" fontSize={{base: 'xl', md: '2xl'}}>
                                    {item.name}
                                </Heading>
                                <Text my={4} fontWeight="light" fontSize={{base: 'sm', md: 'md'}}>
                                    {item.description}
                                </Text>
                            </div>
                        ))}
                        <Box textAlign="center" mt={4}>
                            <Link href="https://github.com/ManLikeTeetos/ArtFinderLanding" color="blue.500" mr={4}>
                                GitHub Repository
                            </Link>
                            <Link href="https://www.linkedin.com/in/ade-ojo-toluwanimi/" color="blue.500" mr={4}>
                                LinkedIn
                            </Link>
                            <Link href="https://twitter.com/ManLikeTeetos" color="blue.500">
                                Twitter
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* Video Section */}
                <Box id="work" mt={16} py={16} bg="#a52a2a8a" color="white">
                    <Heading as="h2" fontSize={{base: '2xl', md: '3xl'}} textAlign="center">
                        How it Works
                    </Heading>
                    <Heading as="h1" fontSize={{base: 'lg', md: 'xl'}} textAlign="center" fontWeight="light">
                        Watch a quick video to see how ArtFinderX helps you navigate the Art World.
                    </Heading>
                    <Box mt={16} textAlign="center">
                        <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
                            <iframe
                                src="https://www.loom.com/embed/1bb7f6053d644e449c0252c066d3f0c8"
                                title="Project Video"
                                frameBorder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowFullScreen
                                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                            ></iframe>
                        </div>
                    </Box>
                </Box>
                {/* Footer */}
                <Box bg="#f8f8f8" py={4} px={6} borderTop="1px solid #ddd" mt={16}>
                    <Flex justifyContent="center" alignItems="center">
                        <Box>
                            {/* Social Media Links */}
                            <Link href="https://github.com/ManLikeTeetos" color="blue.500" mr={4}>
                                GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/ade-ojo-toluwanimi/" color="blue.500" mr={4}>
                                LinkedIn
                            </Link>
                            <Link href="https://twitter.com/ManLikeTeetos" color="blue.500">
                                Twitter
                            </Link>
                        </Box>
                    </Flex>
                    <Text fontSize="sm" textAlign="center" mt={2} color="gray.500">
                        &copy; 2023 Your Name. All rights reserved. | Created by Ade-ojo Toluwanimi
                    </Text>
                </Box>

            </Box>
        </ChakraProvider>
    );
}

export default LandingPage;
