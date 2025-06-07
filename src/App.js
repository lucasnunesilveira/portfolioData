import React, { useState, useEffect } from 'react';
import { Layout, Menu, Typography, Card, Row, Col, Avatar, Button, Space, Tooltip } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  CodeOutlined,
  MailOutlined,
  LinkedinFilled,
  GithubFilled,
  PythonOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  CloudOutlined,
  MessageOutlined,
  RocketOutlined, 
  FundProjectionScreenOutlined, 
  ExperimentOutlined, 
  ArrowUpOutlined,
  WhatsAppOutlined,
  ApartmentOutlined, 
  ToolOutlined 
} from '@ant-design/icons';
import { Link as ScrollLink, Element, Events, animateScroll as scroll } from 'react-scroll';
import './App.css'; 
import AnaliseFinanceira from './assets/AnaliseFinanceira.png';
import RH from './assets/RH.png';
import Marketing from './assets/Marketing.png'; 
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;


const HeroSection = () => (
  <Element name="hero" className="hero-section section">
    <Avatar
      size={{ xs: 100, sm: 120, md: 140, lg: 150, xl: 160, xxl: 180 }}
      src="https://placehold.co/180x180/1890FF/FFFFFF?text=Sua+Foto" // Substitua pela sua foto
      alt="Sua Foto"
      className="hero-avatar"
    />
    <Title level={1} style={{ color: 'white', marginTop: '20px', marginBottom: '10px' }}>
      Olá, eu sou Lucas Nunes
    </Title>
    <Paragraph style={{ color: '#f0f2f5', fontSize: '1.2rem', marginBottom: '30px' }}>
      Um Analista de Dados apaixonado por transformar dados em insights.
    </Paragraph>
    <ScrollLink to="projetos" spy={true} smooth={true} offset={-70} duration={500}>
      <Button type="primary" size="large" icon={<RocketOutlined />}>
        Veja meus Projetos
      </Button>
    </ScrollLink>
  </Element>
);

const AboutSection = () => (
  <Element name="sobre" className="section bg-white">
    <div className="container">
      <Title level={2} className="section-title">Sobre Mim</Title>
      <Row justify="center">
        <Col xs={22} sm={20} md={18} lg={16}>
          <Paragraph className="about-text">
            Olá! Sou Lucas nunes, um profissional de Análise de Dados com 3 anos  de experiência em visualização de dados, modelagem estatística,business intelligence.
            Minha paixão é descobrir narrativas escondidas nos dados e utilizar essas informações para impulsionar decisões estratégicas e resolver problemas complexos.
          </Paragraph>
          <Paragraph className="about-text">
            Sou proficiente em ferramentas como Python, SQL, Excel e Power BI, e tenho um forte entendimento de técnicas de machine learning e análise estatística.
            Busco constantemente aprender novas tecnologias e metodologias para aprimorar minhas habilidades e entregar resultados de alto impacto.
          </Paragraph>
          <Paragraph className="about-text">
            Fora do trabalho, gosto de jogos eletronicos, fica com meus cachorros e fica com a familia. Acredito que a curiosidade e a criatividade são essenciais tanto na vida pessoal quanto na profissional.
          </Paragraph>
        </Col>
      </Row>
    </div>
  </Element>
);

const projectsData = [
  {
    title: 'Analise de dados Financeiros', 
    description: 'Projeto de Análise Financeira abrangente, desenvolvido para proporcionar uma visão clara e consolidada do desempenho financeiro. Este dashboard interativo apresenta métricas cruciais como Receita Total (R$ 1,92 Mi), Despesa Total (R$ 1,15 Mi) e Margem de Lucro (39,96%). O painel inclui: Análise de sete principais segmentos, classificados por média de valor e tamanho da população, permitindo uma exploração detalhada de cada um. Visualização detalhada das Receitas por Componentes (como Vendas, Licenciamento, Aluguéis) e das Despesas por Componentes (Administrativas, Tecnologia, Salários, etc.). Uma tabela comparativa do desempenho financeiro (Despesas e Receitas) ao longo dos anos 2019, 2020 e 2022. Este projeto demonstra a capacidade de transformar dados financeiros complexos em insights acionáveis através de visualizações de dados eficazes, provavelmente utilizando ferramentas como Power BI ou Tableau, auxiliando na tomada de decisões estratégicas e no monitoramento da saúde financeira.', // A descrição detalhada que eu havia sugerido
    image: AnaliseFinanceira, 
    tags: ['Excel', 'Modelagem de dados', 'ETL','Power BI'], 
    link: '#',
    icon: <FundProjectionScreenOutlined /> 
},
  {
    title: 'Análise do RH',
    description: 'Análise de dados para vendas e para identificar pontos de MQL, SQL,entre. Desenvolvimento de dashboards interativos para visualização.',
    image: RH,
    tags: ['SQL', 'Power BI', 'Excel'],
    link: '#',
    icon: <FundProjectionScreenOutlined />
  },
  {
    title: 'Análise de marketplace',
    description: 'Modelo de machine learning para [propósito do modelo]. Avaliação de performance e deployment.',
    image: Marketing,
    tags: ['CSV', 'ETL', 'Power BI'],
    link: '#',
    icon: <ExperimentOutlined />
  },
  {
    title: 'Analise com penthaho',
    description: 'Modelo de machine learning para [propósito do modelo]. Avaliação de performance e deployment.',
    image: Marketing,
    tags: ['CSV', 'ETL', 'Power BI'],
    link: '#',
    icon: <ExperimentOutlined />
  },
  {
    title: 'machine learning',
    description: 'Modelo de machine learning para [propósito do modelo]. Avaliação de performance e deployment.',
    image: Marketing,
    tags: ['CSV', 'ETL', 'Power BI'],
    link: '#',
    icon: <ExperimentOutlined />
  },

];

const ProjectsSection = () => (
  <Element name="projetos" className="section bg-light-gray">
    <div className="container">
      <Title level={2} className="section-title">Meus Projetos</Title>
      <Row gutter={[24, 24]} justify="center">
        {projectsData.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt={project.title} src={project.image} style={{ height: '180px', objectFit: 'cover' }} />}
              actions={[
                <Button type="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Detalhes
                </Button>
              ]}
            >
              <Card.Meta
                avatar={React.cloneElement(project.icon, { style: { fontSize: '24px', color: '#1890ff' } })}
                title={project.title}
                description={<Paragraph ellipsis={{ rows: 3 }}>{project.description}</Paragraph>}
              />
              <div style={{ marginTop: '10px' }}>
                {project.tags.map(tag => <Text code key={tag} style={{ marginRight: '5px' }}>{tag}</Text>)}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </Element>
);

const skillsData = [
    { name: 'Python', icon: <PythonOutlined style={{ fontSize: '48px', color: '#306998' }} /> },
    { name: 'SQL', icon: <DatabaseOutlined style={{ fontSize: '48px', color: '#00758F' }} /> },
    { name: 'R', icon: <ExperimentOutlined style={{ fontSize: '48px', color: '#276DC3' }} /> },
    { name: 'Tableau', icon: <BarChartOutlined style={{ fontSize: '48px', color: '#E97627' }} /> },
    { name: 'Power BI', icon: <FundProjectionScreenOutlined style={{ fontSize: '48px', color: '#F2C811' }} /> },
    { name: 'Machine Learning', icon: <CodeOutlined style={{ fontSize: '48px', color: '#4CAF50' }} /> },
    { name: 'Cloud (AWS/Azure/GCP)', icon: <CloudOutlined style={{ fontSize: '48px', color: '#0082C3' }} /> },
    { name: 'Comunicação', icon: <MessageOutlined style={{ fontSize: '48px', color: '#FF6F61' }} /> },
    { name: 'Apache Airflow', icon: <ApartmentOutlined style={{ fontSize: '48px', color: '#007ACC' }} /> }, 
    { name: 'Pentaho', icon: <ToolOutlined style={{ fontSize: '48px', color: '#E95F26' }} /> },         
];

const SkillsSection = () => (
  <Element name="habilidades" className="section bg-white">
    <div className="container">
      <Title level={2} className="section-title">Minhas Habilidades</Title>
      <Row gutter={[24, 32]} justify="center">
        {skillsData.map(skill => (
          <Col key={skill.name} xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
            <div className="skill-item">
              {skill.icon}
              <Text strong style={{ display: 'block', marginTop: '10px' }}>{skill.name}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </Element>
);

const ContactSection = () => (
  <Element name="contato" className="section bg-dark text-light">
    <div className="container">
      <Title level={2} className="section-title inverted">Entre em Contato</Title>
      <Paragraph style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px' }}>
        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
      </Paragraph>
      <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="link"
          href="mailto:lucasnunesdados@gmail.com" 
          icon={<MailOutlined />}
          size="large"
          className="contact-link"
        >
          lucasnunesdados@gmail.com 
        </Button>
        <Space size="large">
          <Tooltip title="LinkedIn">
            <a href="https://www.linkedin.com/in/lucas-nunes-da-silveira/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <LinkedinFilled />
            </a>
          </Tooltip>
          <Tooltip title="GitHub">
            <a href="https://github.com/lucasnunesilveira" target="_blank" rel="noopener noreferrer" className="social-icon">
              <GithubFilled />
            </a>
          </Tooltip>
          <Tooltip title="WhatsApp: (81) 99401-0802">
            <a href="https://wa.me/5581994010802" target="_blank" rel="noopener noreferrer" className="social-icon">
              <WhatsAppOutlined />
            </a>
          </Tooltip>
          <Tooltip title="Power BI Showcase">
            <a href="#"  target="_blank" rel="noopener noreferrer" className="social-icon">
              <FundProjectionScreenOutlined />
            </a>
          </Tooltip>
        </Space>
      </Space>
    </div>
  </Element>
);

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
    });
    Events.scrollEvent.register('end', function () {
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  const menuItems = [
    { key: 'hero', label: 'Início', icon: <UserOutlined /> },
    { key: 'sobre', label: 'Sobre Mim', icon: <UserOutlined /> },
    { key: 'projetos', label: 'Projetos', icon: <LaptopOutlined /> },
    { key: 'habilidades', label: 'Habilidades', icon: <CodeOutlined /> },
    { key: 'contato', label: 'Contato', icon: <MailOutlined /> },
  ];

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 100, width: '100%', background: 'rgba(20, 20, 40, 0.9)', backdropFilter: 'blur(5px)' }}>
        <Row justify="space-between">
          <Col>
            <div className="logo">
              <ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500} style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Meu Portfólio
              </ScrollLink>
            </div>
          </Col>
          <Col>
            <Menu theme="dark" mode="horizontal" selectable={false} style={{ lineHeight: '64px', background: 'transparent', borderBottom: 'none' }}>
              {menuItems.map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <ScrollLink to={item.key} spy={true} smooth={true} offset={-70} duration={500}>
                    {item.label}
                  </ScrollLink>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
        </Row>
      </Header>

      <Content style={{ paddingTop: '64px' }}> 
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Content>

      <Footer style={{ textAlign: 'center', background: '#001529', color: 'rgba(255,255,255,0.65)' }}>
        <Paragraph style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '5px' }}>
          &copy; {new Date().getFullYear()} Lucas Nunes. Todos os direitos reservados.
        </Paragraph>
        <Paragraph style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9em' }}>
          Construído com React & Ant Design.
        </Paragraph>
      </Footer>

      {showScrollTop && (
        <Tooltip title="Voltar ao topo">
          <Button
            type="primary"
            shape="circle"
            icon={<ArrowUpOutlined />}
            size="large"
            onClick={scrollToTop}
            className="scroll-to-top-btn"
          />
        </Tooltip>
      )}
    </Layout>
  );
};

export default App;