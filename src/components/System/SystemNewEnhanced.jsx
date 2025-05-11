import React, { useState } from 'react';

const SystemNewEnhanced = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const techSpecs = [
    "27+ stability parameters analyzed",
    "Real-time monitoring every 0.5 seconds", 
    "IMO SOLAS compliant",
    "Works in sea states up to 8",
    "Reduces fuel consumption by 15-20%",
    "30% faster loading operations"
  ];

  const testimonials = [
    {
      name: "Captain John Smith",
      role: "Maritime Safety Officer",
      quote: "Reduced our stability incidents by 90%"
    },
    {
      name: "Maria Gonzalez",
      role: "Port Manager",
      quote: "Cut our loading time by 35% while improving safety"
    }
  ];

  return (
    <section id="solutions" style={{
      maxWidth: '100%',
      margin: '0 auto',
      padding: '80px 20px',
      backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.5), rgba(248, 249, 250, 0.7)), url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
      boxShadow: '0 2px 20px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '5rem',
          color: '#2c3e50',
          marginBottom: '25px',
          fontWeight: '800',
          lineHeight: '1.1',
          textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
        }}>Advanced Ship Load Balancing</h2>
        <p style={{
          fontSize: '1.5rem',
          color: '#5d6d7e',
          maxWidth: '900px',
          margin: '0 auto 40px',
          lineHeight: '1.5',
          fontWeight: '500'
        }}>Our intelligent system ensures optimal cargo distribution in all sea conditions, reducing fuel costs and improving safety</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <button style={{
            padding: '20px 45px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.3rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>Request Live Demo</button>
          <button style={{
            padding: '20px 45px',
            backgroundColor: 'transparent',
            color: '#3498db',
            border: '2px solid #3498db',
            borderRadius: '6px',
            fontSize: '1.3rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>Learn More</button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '50px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(155, 209, 255, 0.2) 100%)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            fontSize: '5rem',
            marginBottom: '30px',
            textAlign: 'center',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}>⚖️</div>
          <h3 style={{
            fontSize: '4rem',
            marginBottom: '30px',
            color: '#2c3e50',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '0.5px'
          }}>Precision Weight Distribution</h3>
          <p style={{
            marginBottom: '30px',
            color: '#5d6d7e',
            textAlign: 'center',
            fontSize: '2.5rem'
          }}>Advanced algorithms account for:</p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginBottom: '20px'
          }}>
            {techSpecs.slice(0, expandedSpecs ? techSpecs.length : 3).map((spec, i) => (
              <li key={i} style={{
                marginBottom: '8px',
                paddingLeft: '20px',
                position: 'relative',
                fontSize: '2rem'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#3498db',
                  fontSize: '2rem'
                }}>•</span> {spec}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => setExpandedSpecs(!expandedSpecs)}
            style={{
              background: 'none',
              border: 'none',
              color: '#3498db',
              cursor: 'pointer',
              padding: '8px 0',
              fontSize: '1.5rem'
            }}
          >
            {expandedSpecs ? 'Show Less' : 'Show More...'}
          </button>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.1) 0%, rgba(142, 236, 178, 0.2) 100%)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            fontSize: '5rem',
            marginBottom: '30px',
            textAlign: 'center',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}>📊</div>
          <h3 style={{
            fontSize: '4rem',
            marginBottom: '30px',
            color: '#2c3e50',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '0.5px'
          }}>Real-Time Data Handling</h3>
          <p style={{
            marginBottom: '30px',
            color: '#5d6d7e',
            textAlign: 'center',
            fontSize: '2rem'
          }}>Continuously monitors and adjusts cargo placement based on:</p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            borderLeft: '3px solid #3498db',
            paddingLeft: '15px'
          }}>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Wave height and frequency
            </li>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Vessel roll/pitch/yaw
            </li>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Cargo weight shifts
            </li>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Weather forecasts
            </li>
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.1) 0%, rgba(245, 159, 148, 0.2) 100%)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            fontSize: '5rem',
            marginBottom: '30px',
            textAlign: 'center',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}>🛡️</div>
          <h3 style={{
            fontSize: '4rem',
            marginBottom: '30px',
            color: '#2c3e50',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '0.5px'
          }}>Advanced Safety Checks</h3>
          <p style={{
            marginBottom: '30px',
            color: '#5d6d7e',
            textAlign: 'center',
            fontSize: '2rem'
          }}>Validates stability against IMO requirements including:</p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            borderLeft: '3px solid #3498db',
            paddingLeft: '15px'
          }}>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Intact stability criteria
            </li>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Damage stability requirements
            </li>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> Load line regulations
            </li>
            <li style={{
              marginBottom: '8px',
              paddingLeft: '20px',
              position: 'relative',
              fontSize: '2rem'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#3498db',
                fontSize: '2rem'
              }}>•</span> SOLAS Chapter VI
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px'
      }}>
        <button 
          onClick={() => setShowTestimonials(!showTestimonials)}
          style={{
            padding: '18px 40px',
            backgroundColor: showTestimonials ? '#e74c3c' : '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginBottom: '30px'
          }}
        >
          {showTestimonials ? 'Hide Testimonials' : 'View Customer Testimonials'}
        </button>

        {showTestimonials && (
          <div style={{
            width: '100%',
            maxWidth: '1000px'
          }}>
            <h3 style={{
              textAlign: 'center',
              marginBottom: '30px',
              fontSize: '1.8rem',
              color: '#2c3e50'
            }}>Trusted by Industry Leaders</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {testimonials.map((testimonial, i) => (
                <div key={i} style={{
                  backgroundColor: 'white',
                  padding: '25px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    fontStyle: 'italic',
                    fontSize: '1.3rem',
                    marginBottom: '20px',
                    lineHeight: '1.6'
                  }}>"{testimonial.quote}"</div>
                  <div style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '15px'
                  }}>
                    <div style={{
                      fontWeight: 'bold',
                      fontSize: '1.3rem'
                    }}>{testimonial.name}</div>
                    <div style={{
                      color: '#7f8c8d',
                      fontSize: '1.1rem'
                    }}>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SystemNewEnhanced;
