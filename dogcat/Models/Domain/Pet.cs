﻿using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace dogcat.Models.Domain
{
    [Table("Pet")]
    public class Pet
    {
        public long Id { get; set; }  // PK
        public string Species { get; set; }  // 펫 종
        public int Old { get; set; }  // 펫 나이
        public string Name { get; set; }  // 펫 이름
        public int Weight { get; set; }  // 펫 무게
        public string? Image { get; set; }  // 펫 이미지


        [NotMapped]
        public string? ContentType { get; set; }  // 파일종류 (MIME Type)

        [NotMapped]
        public string? RequestPath { get; set; }  // 저장된 파일에 대한 요청 경로 (url)

        public User User { get; set; }  // 유저 FK
        public long UserId { get; set; }

        public ICollection<PetImage> PetImages { get; set; } = new HashSet<PetImage>();

        
    }
}
