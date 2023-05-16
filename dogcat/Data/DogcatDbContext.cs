﻿using dogcat.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace dogcat.Data
{
    public class DogcatDbContext : DbContext
    {
        public DogcatDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Comment> Comments { get; set; }
        public DbSet<FreeBoard> FreeBoards { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<PetImage> PetImages { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Write> Writes { get; set; }
        public DbSet<WriteImage> Images { get; set; }
    }
}