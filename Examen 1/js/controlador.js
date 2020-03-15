var localStorage = window.localStorage;
var usuarios;
var categorias;
var usuarioSeleccionado;
var categoriaSeleccionada;


if (localStorage.getItem("Usuarios")==null){
///-----------------------------------------------USUARIOS
    usuarios = [
        {
            nombre:"Pedro",
            apellido:"Martinez",
            ordenes:[
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Juan",
            apellido:"Perez",
            ordenes:[
                {
                    nombreProducto:"Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Maria",
            apellido:"Rodriguez",
            ordenes:[
                {
                    nombreProducto:"Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        }
    ];


    ///-----------------------------------------------CATEGORIAS
    categorias = [
        {
            nombreCategoria:"Farmacias",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#b8abf2",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Restaurantes",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#fcf38d",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Salud",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#b656d3",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Café",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#fcd055",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Bebidas",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#ef9292",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Ropa",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#7ce248",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Alcohol",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#db5c5c",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Donas",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#e0e554",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Comida China",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#858ebf",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Comida",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#7add63",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Bebidas",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Regalos",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#f461a1",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        }
    ];
    localStorage.setItem("Usuarios",JSON.stringify(usuarios));
    localStorage.setItem("Categorias",JSON.stringify(categorias));
}else{
    usuarios = JSON.parse(localStorage.getItem('Usuarios'));
    categorias = JSON.parse(localStorage.getItem('Categorias'));
}

/*console.log ('Usuarios', usuarios);
console.log ('Categorias', categorias);*/

function Mostrar() {
    MostrarUsuarios();
    MostrarBienvenida();
    MostrarCategorías();
}

function CambiarUsuario(){
    MostrarBienvenida();
}

function MostrarUsuarios(){
    for(let i=0; i<usuarios.length; i++){ 
        document.getElementById('usuarios').innerHTML += `<option value='${usuarios[i].nombre}'>${usuarios[i].nombre} ${usuarios[i].apellido}</option>`; 
        };
}

function MostrarBienvenida(){
    usuarioSeleccionado = document.getElementById('usuarios').value;
    document.getElementById('bienvenida-row').innerHTML = `<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-3">
        <h3 class="h3">¡Hola ${usuarioSeleccionado}!</h3>
        <h3 class="text-muted">¿Qué necesitas?</h3>
    </div>`
}

function MostrarCategorías(){
    for(let i=0; i<categorias.length; i++){
        document.getElementById('categorias-row').innerHTML += 
        `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 my-2">
            <div class="card p-2" style="background-color: ${categorias[i].color};">
                <div class="card-header p-2" style="background-color: ${categorias[i].color};">
                <button onclick="LlenarInfoModal(${i});" class="btn btn-outline btn-sm"><i class=" ${categorias[i].icono} fa-5x"></i></button>
                </div>
                <div class="card-body">
                    <b>${categorias[i].nombreCategoria}</b>
                    <h6 class="card-text">${categorias[i].empresas.length} Comercios</h6>
                </div>
            </div>
        </div>
        `
    }
}

function LlenarInfoModal(categoriaPosición){
    for (let j=0; j<categorias[categoriaPosición].empresas.length; j++){
        document.getElementById('modal-productos').innerHTML+= `
            <div class="card">
                <img class="card-img-top" src="${categorias[categoriaPosición].empresas[j].imagen}" alt="Imagen">
                <h5 id="title-img">${categorias[categoriaPosición].empresas[j].nombreEmpresa}</h5>
                <div id="${j}" class="card-body">
                
                </div>
            </div>`
            for(let k=0; k<categorias[categoriaPosición].empresas[j].productos.length; k++){
                document.getElementById(j).innerHTML +=
                `
                <div class="row">
                    <b style="color:black">${categorias[categoriaPosición].empresas[j].productos[k].nombreProducto}</b>
                    <button onclick="CantidadModal(${categoriaPosición,j,k});" type="button" class="btn btn-primary px-4 rounded-pill ml-auto">Pedir</button>                       
                    </div>
                    <div class="row">
                    <h6 style="color:black" class="card-text">${categorias[categoriaPosición].empresas[j].productos[k].descripcion} </h6>                                
                    </div>
                    <div class="row">
                    <h5 class="ml-auto" style="color:black">${categorias[categoriaPosición].empresas[j].productos[k].precio} </h5>                            
                    </div>
                    </div>
                    `
                }
        }
    
    $('#modal-categorias').modal('show');
}
   
function CantidadModal(i,j,k){
    document.getElementById('modal-agregar-head').innerHTML+= `
    <b style="color:black">${categorias[i].empresas[j].productos[k].nombreProducto}</b>
    <h6 style="color:black" class="card-text">${categorias[i].empresas[j].productos[k].descripcion} </h6>                                
    `
    document.getElementById('modal-agregar-footer').innerHTML += `
    <h5 class="ml-auto" style="color:black">${categorias[categoriaPosición].empresas[j].productos[k].precio} </h5>                            
    `
    $('#modal-categorias').modal('hide');
    $('#modal-agregar').modal('show');
}

function AgregarOrden(){

}

function CantidadModal(){

}
